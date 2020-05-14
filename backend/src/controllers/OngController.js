const express = require('express');
const connection = require('../database/connection')
const crypto = require('crypto');
module.exports = {
    async store(req, res) {
            // const data = req.body; pega a requisao do corpo para a criação de novas ongs
            const { name, email, whatsapp, city, uf } = req.body; //Feito uma desestruturação para que o usuario somente passe aquilo o que foi pedido.
            console.log({name, email, whatsapp, city, uf})
        
            const id = crypto.randomBytes(4).toString('HEX'); //cria um id para cada ong com 4 bytes e transforma em uma string hexadecimal
        
            await connection('ongs').insert({
                id,
                name,
                email,
                whatsapp,
                city,
                uf
            })
            return res.json({id})

    },

    async index(req, res) {
        const ongs = await connection('ongs').select('*')

        return res.json(ongs);
    }
}