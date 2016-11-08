/**
 * Created by vgattineni on 10/17/16.
 */

module.exports = {
  secret: 'secret should not be  disclosed',
  expiresIn: 28800,
  jwtExcludeEndpoints: [
    '/signup',
    '/login',
    '/activateProfile',
    '/validateToken',
    '/api/movies/premium',
    '/api/movies/subscription',
    'api/summary',
  ],
  removeExpiredTokensTimer: 900000
}
