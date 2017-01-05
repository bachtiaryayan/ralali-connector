/*
 * author : agung.julisman@yahoo.com
 * modified by: ralali dev
 * */
'use strict'

const Promise = require('bluebird')
const request = require("request")

/**
 * Module exports.
 * @public
 */

module.exports = {
    version: '1.0.6',

    /**
     * Service fot method POST.
     *
     * @param  {String} url
     * @param  {Json} data
     * @param {Object} headers
     * @return {Object} Callback status 'statusCode' and body 'response'
     */
    postService: (url, data, headers, formData = null, callback) => {
        return new Promise(function (resolve, reject) {
            request({
                url: url,
                method: 'POST',
                headers: headers,
                json: data,
                formData: formData
            }, (error, response, body) => {
                if (error) {
                    return reject(error)
                }
                resolve({
                    status: response.statusCode,
                    body: body
                })
            })
        }).nodeify(callback)
    },

    /**
     * Service fot method GET.
     *
     * @param  {String} url
     * @param  {Object} query
     * @param  {Object} headers
     * @return {Object} Callback status 'statusCode' and body 'response'
     */
    getService: (url, query, headers, callback) => {
        return new Promise(function (resolve, reject) {
            request({
                url: url,
                method: 'GET',
                qs: query,
                headers: headers
            }, (error, response, body) => {
                if (error) {
                    return reject(error)
                }
                resolve({
                    status: response.statusCode,
                    body: body
                })
            })
        }).nodeify(callback)
    },

    /**
     * Service fot method GET.
     *
     * @param  {String} url
     * @param  {Object} query
     * @param  {Object} headers
     * @return {Object} Callback status 'statusCode' and body 'response'
     */
    putService: (url, data, headers, callback) => {
        return new Promise(function (resolve, reject) {
            request({
                url: url,
                method: 'PUT',
                headers: headers,
                data: data
            }, (error, response, body) => {
                if (error) {
                    return reject(error)
                }
                resolve({
                    status: response.statusCode,
                    body: body
                })
            })
        }).nodeify(callback)
    }
}