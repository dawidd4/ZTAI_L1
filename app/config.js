const config = {
    port: process.env.PORT || 3000,
    databaseUrl: process.env.MONGODB_URI || 'mongodb://dawid:karwat94@ds155663.mlab.com:55663/mojabaza',
    JwtSecret: process.env.JWT_SECRET || 'secret'
};

export default config;
