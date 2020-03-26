import { Injectable } from '@angular/core';
import { STORAGE_KEYS } from '../config/storage_keys.config';




@Injectable()
export class StorageService {

    getLocalUser(chave: string): string {
        let usr = localStorage.getItem(chave);
        if (usr == null) {
            return null;
        }
        else {
            return JSON.parse(usr);
        }

    }

    setLocalUser(obj: any) {

        
        if (obj.matricula !== '0') {

            localStorage.setItem(STORAGE_KEYS.idade, (obj.idade));
            localStorage.setItem(STORAGE_KEYS.matricula, (obj.matricula));
            localStorage.setItem(STORAGE_KEYS.nome, (obj.nome));
            localStorage.setItem(STORAGE_KEYS.sexo, (obj.sexo));
            localStorage.setItem(STORAGE_KEYS.telefone, (obj.telefone));
            localStorage.setItem(STORAGE_KEYS.email, (null));
            localStorage.setItem(STORAGE_KEYS.idprofissao, (obj.idprofissao));
            localStorage.setItem(STORAGE_KEYS.dat_nascimento, (obj.dat_nascimento));

        } else {

            alert("Usuario google");
            localStorage.setItem(STORAGE_KEYS.idade, (null));
            localStorage.setItem(STORAGE_KEYS.matricula, ('0'));
            localStorage.setItem(STORAGE_KEYS.nome, (obj.displayName));
            localStorage.setItem(STORAGE_KEYS.sexo, (null));
            localStorage.setItem(STORAGE_KEYS.telefone, (null));
            localStorage.setItem(STORAGE_KEYS.email, (obj.displayEmail));

        }
    }

}