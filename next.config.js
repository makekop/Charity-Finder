const { ProjectorIcon } = require("lucide-react");
const { hostname } = require("os");

module.exports = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**",
            },
        ],
    },
};
