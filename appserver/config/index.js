module.exports = {
    
    getDbConnectionString: function() {
        return process.env.DATABASE_CONNECT_STRING;
    }
    
}