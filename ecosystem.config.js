module.exports = {
    apps: [{
        name: "barratt-in",
        script: "npm",
        args: "start",
        wait_ready: true,
        listen_timeout: 10000,
        restart_delay: 10000,
        env: {
            NODE_ENV: "development",
            PORT: 3000,           
            NEXT_PUBLIC_API_URL: 'https://api.barratt.benhams.co.uk/v1/',
            NEXT_PUBLIC_MEDIA_URL: 'https://dfl6m0l15t52.cloudfront.net/development/'
        },
        env_staging: {
            NODE_ENV: "staging",
            PORT: 3050,          
            NEXT_PUBLIC_API_URL: 'https://api.barratt.benhams.co.uk/v1/',
            NEXT_PUBLIC_MEDIA_URL: 'https://dfl6m0l15t52.cloudfront.net/development/'
        },
        env_production: {
            NODE_ENV: "production",
            PORT: 3050,            
            NEXT_PUBLIC_API_URL: 'https://api.barratt.benhams.co.uk/v1/',
            NEXT_PUBLIC_MEDIA_URL: 'https://dfl6m0l15t52.cloudfront.net/development/'
        }
    }]
}