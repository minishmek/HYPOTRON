const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {Doctor} = require('../models/models')
const generateJwt = (id, email, fullname) => {
    return jwt.sign(
        {id, email, fullname},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}

class DoctorController {
    async registration(req, res, next) {
        const {email, password, fullname} = req.body
        if (!email || !password) {
            return next(ApiError.badRequest('Некоректний email або password'))
        }
        const candidate = await Doctor.findOne({where: {email}})
        if (candidate) {
            return next(ApiError.badRequest('Користувач з таким email вже існує'))
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const doctor = await Doctor.create({email, fullname, password: hashPassword})
        const token = generateJwt(doctor.id, doctor.email, doctor.fullname)
        return res.json({token})
    }

    async login(req, res, next) {
        const {email, password} = req.body
        const doctor = await Doctor.findOne({where: {email}})
        if (!doctor) {
            return next(ApiError.internal('Користувача не знайдено'))
        }
        let comparePassword = bcrypt.compareSync(password, doctor.password)
        if (!comparePassword) {
            return next(ApiError.internal('Вказано невірний пароль'))
        }
        const token = generateJwt(doctor.id, doctor.email, doctor.fullname)
        return res.json({token})
    }

    async check(req, res) {
        const token = generateJwt(req.doctor.id, req.doctor.email, req.doctor.fullname)
        return res.json({token})
    }
    async getProfile(req, res, next) {
        try {
          const doctor = await Doctor.findByPk(req.doctor.id, {
            attributes: ['id', 'fullname', 'email', 'age', 'city', 'place_of_work', 'position', 'specialization', 'phone'],
          });
    
          if (!doctor) {
            return next(ApiError.notFound('Doctor not found'));
          }
    
          res.json(doctor);
        } catch (error) {
          next(ApiError.internal('Error fetching doctor profile'));
        }
      }
      async logout(req, res, next) {
        try {
          res.json({ message: 'Logout successful' });
        } catch (error) {
          next(ApiError.internal('Error during logout'));
        }
      }
}

module.exports = new DoctorController()

  