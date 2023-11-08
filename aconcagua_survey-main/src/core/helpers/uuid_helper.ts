import { v4 as uuid } from 'uuid';

export abstract class UUIDHelper {

    static getId ():string {
        return uuid()
    }
}