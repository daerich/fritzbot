'use strict';
const fs = require('fs');


class config {
    constructor(path, content, mode){
      this.writeConfig = function(path, content, mode){
        fs.access(path,constants.F_OK, (err) =>{
            if(err){
              console.log(path + ' is not accessible!');
            }
            else{
              if(mode == "json"){
                  JSON.stringify(content);
              }

            }
          });
      }
}}


exports.Config = config;
