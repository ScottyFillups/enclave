const express = require('express')
const { getPrivateProfile } = require('enclavejs')
const router = express.Router()

const org = 'onesies'

router.post('/', (req, res) => {
  getPrivateProfile(req.body.profile, org)
    .then((profile) => {
      const profileJSON = profile.getJSON()
      if (req.body.password === profileJSON.password) {
        const payload = {
          credit_card: profileJSON.credit_card,
          card_expiry: profileJSON.card_expiry,
          card_csv: profileJSON.card_csv
        }
        res.send(payload)
      } else {
        res.status(401).send({ message: 'Incorrect password' })
      }
    })
    .catch(err => {
      res.status(404).send({ message: 'Profile does not exist' })
    })
})

module.exports = router
