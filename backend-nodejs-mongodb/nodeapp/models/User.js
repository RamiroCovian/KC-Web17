import mongoose, { Schema } from "mongoose";
import bcrypt from 'bcrypt'

const userSchema = new Schema({
    email: { type: String, unique: true },
    password: String
})

// User.findOne --> estatico
// user.save --> instancia


// metodo estatico, que hace un hash de una password
userSchema.statics.hashPassword = function (clearPassword) {
    return bcrypt.hash(clearPassword, 7)
}

// metodo de instancia, comprueba que la password coincide
// en metodos de instancia , NO USAR ARROW FUNCTIONS (se pierde el this)
userSchema.methods.comparePassword = function (clearPassword) {
    return bcrypt.compare(clearPassword, this.password)
}

const User = mongoose.model('User', userSchema)

export default User