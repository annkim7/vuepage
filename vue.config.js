module.exports = {
    // publicPath: '/vuepage',
    publicPath: process.env.NODE_ENV === 'production' ? '/vuepage/' : '/'
}