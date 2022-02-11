module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '01829fafdb8539ff3fcf15f9bc0d31f6'),
  },
});
