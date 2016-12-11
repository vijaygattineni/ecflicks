/**
 * Created by vgattineni on 10/17/16.
 */

module.exports = {
  secret: 'secret should not be  disclosed',
  expiresIn: 28800,
  jwtExcludeEndpoints: [
    '/api/auth/signup',
    '/api/auth/login',
    '/api/auth/activateProfile',
    '/api/auth/validateToken',
    '/api/movies/premium',
    '/api/movies/subscription',
    'api/summary',
  ],
  removeExpiredTokensTimer: 900000
}
