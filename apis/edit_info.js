var Token = require('../models/token')
var User = require('../models/user')
var res_factory = require('../common/res_factory')

module.exports = function (req, res, next) {
  Token.find({
    token: req.headers.authorization
  }, function (err, ts) {
    if (err || ts.length == 0) {
      res.json(res_factory.err_res)
      return
    }
    User.updateOne({
      student_id: ts[0].student_id
    }, {
      $set: {
        username: req.body.username,
        password: req.body.password,
        name: req.body.name,
        gender: req.body.gender,
        birth_year: req.body.birth_year,
        birth_month: req.body.birth_month,
        birth_day: req.body.birth_day,
        personal_id: req.body.personal_id,
        student_id: req.body.student_id,
        start_year: req.body.start_year,
        end_year: req.body.end_year,
        department: req.body.department,
        major: req.body.major,
        class: req.body.class,
        phone: req.body.phone,
        email: req.body.email,
        compony: req.body.compony,
        compony_address: req.body.compony_address,
        alumni_association: req.body.alumni_association,
        other: req.body.other
      }
    }, {}, function (err) {
      if (err) {
        res.json(res_factory.err_res)
        return
      }
      res.json(res_factory.create_res(0, '成功'))
    })
  })
}