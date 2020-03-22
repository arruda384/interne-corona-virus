import { Injectable } from '@angular/core';
import { jsonpCallbackContext } from '@angular/common/http/src/module';
import { LocalUser } from '../models/local_user';
import { STORAGE_KEYS } from '../config/storage_keys.config';




@Injectable()
export class StorageService{

    getLocalUser(chave: string) : string{
        let usr = localStorage.getItem(chave);
        if (usr == null){
            return null;
        }
        else {
            return JSON.parse(usr);
        }

    }

    setLocalUser(obj : LocalUser){
             
        localStorage.setItem(STORAGE_KEYS.idade, (obj.idade));
        localStorage.setItem(STORAGE_KEYS.matricula, (obj.matricula));
        localStorage.setItem(STORAGE_KEYS.nome, (obj.nome));
        localStorage.setItem(STORAGE_KEYS.sexo, (obj.sexo));
        localStorage.setItem(STORAGE_KEYS.telefone, (obj.telefone));
        console.log(localStorage);
        console.log(obj);
    }

}