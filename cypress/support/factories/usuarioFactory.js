//Usado no teste de Cadastro
//Lógica para criar dados dinâmicos com Faker

import { faker } from '@faker-js/faker'

const paisesValidos=[
  'India',
  'United States',
  'Canada',
  'Australia',
  'Israel',
  'New Zealand',
  'Singapore'
]

const generoFaker = faker.person.gender()// retorna 'male' ou 'female'
const genero = generoFaker=='male' ? 'radioMr' : 'radioMrs'


const nascimento = faker.date.birthdate({ min: 18, max: 65, mode: 'age' })
const dia = nascimento.getDate().toString()
const meses = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
]
const mes = meses[nascimento.getMonth()]
let ano = nascimento.getFullYear()
ano = Math.max(1900, Math.min(ano, 2021)).toString()

const nome = faker.person.firstName()



export function criarUsuario() {
  return {
    genero,
    nome,
    email: faker.internet.email(),
    senha: faker.internet.password(),
    dataNascimento: { dia, mes, ano },

    
    endereco: {
      primeiroNome: nome,
      sobrenome: faker.person.lastName(),
      empresa: faker.company.name(),
      endereco1: faker.location.streetAddress(),
      endereco2: faker.location.secondaryAddress(),
      pais: faker.helpers.arrayElement(paisesValidos), 
      estado: faker.location.state(),
      cidade: faker.location.city(),
      cep: faker.location.zipCode(),
      celular: faker.phone.number()
    }
  }
}
