import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { username } = await req.json();
    
    if (!username) {
      throw new Error('Username is required');
    }

    console.log(`Fetching GitHub stats for: ${username}`);

    // Fetch user data
    const userResponse = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
        'User-Agent': 'Lovable-App'
      }
    });

    if (!userResponse.ok) {
      throw new Error(`GitHub API error: ${userResponse.status}`);
    }

    const userData = await userResponse.json();

    // Fetch repositories to calculate stars and language stats
    const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`, {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
        'User-Agent': 'Lovable-App'
      }
    });

    if (!reposResponse.ok) {
      throw new Error(`GitHub API error: ${reposResponse.status}`);
    }

    const repos = await reposResponse.json();

    // Calculate total stars
    const totalStars = repos.reduce((sum: number, repo: any) => sum + (repo.stargazers_count || 0), 0);
    
    // Calculate total forks
    const totalForks = repos.reduce((sum: number, repo: any) => sum + (repo.forks_count || 0), 0);

    // Calculate language stats
    const languageCounts: Record<string, number> = {};
    repos.forEach((repo: any) => {
      if (repo.language) {
        languageCounts[repo.language] = (languageCounts[repo.language] || 0) + 1;
      }
    });

    // Convert to percentages
    const totalReposWithLanguage = Object.values(languageCounts).reduce((sum, count) => sum + count, 0);
    const languages = Object.entries(languageCounts)
      .map(([name, count]) => ({
        name,
        percentage: Math.round((count / totalReposWithLanguage) * 100)
      }))
      .sort((a, b) => b.percentage - a.percentage)
      .slice(0, 5);

    // Fetch events for contribution data
    const eventsResponse = await fetch(`https://api.github.com/users/${username}/events/public?per_page=100`, {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
        'User-Agent': 'Lovable-App'
      }
    });

    let recentContributions = 0;
    if (eventsResponse.ok) {
      const events = await eventsResponse.json();
      // Count push events as contributions
      recentContributions = events.filter((e: any) => e.type === 'PushEvent').length;
    }

    const stats = {
      username: userData.login,
      avatar_url: userData.avatar_url,
      public_repos: userData.public_repos,
      followers: userData.followers,
      following: userData.following,
      total_stars: totalStars,
      total_forks: totalForks,
      languages,
      recent_contributions: recentContributions,
      profile_url: userData.html_url,
    };

    console.log('GitHub stats fetched successfully:', stats);

    return new Response(JSON.stringify(stats), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error fetching GitHub stats:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
