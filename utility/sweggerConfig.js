const options = {
    definition: {
        openapi: "3.1.0",
        info: {
            title: "Test Task",
            description:
                "This is a test task",
            license: {
                name: "Afaq ahmad",
            },
            contact: {
                name: "Afaq ahmad",
                email: "afaqzafar15@gmail.com",
            },
        },
        servers: [
            {
                url: "http://localhost:3000",
            },
        ],
    },
    apis: ["./src/routes/**/*.js"],
};

module.exports = options;