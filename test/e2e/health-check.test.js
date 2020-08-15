const got = require('got')

test('HealthCheck', async () => {
  const resp = await got("http://node-app:3000/_health_check", {
    method: 'GET',
    responseType: 'json',
  })

  expect(resp.statusCode).toBe(200)
  expect(resp.body.message).toBe('ok')
})