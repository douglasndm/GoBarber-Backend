module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'docker',
    database: 'gobarber_2',
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
    },
};
