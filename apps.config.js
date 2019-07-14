module.exports = {
    apps: [
        {
            name: 'lc_monitor',
            script: './index.js',
            instances: 1,
            autorestart: true,
            watch: false,
            max_memory_restart: '1G',
            interpreter: 'node_modules/babel-cli/bin/babel-node.js',
        }
    ]
};