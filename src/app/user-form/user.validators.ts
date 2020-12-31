import { AbstractControl, ValidationErrors } from "@angular/forms";


export class SignupFormValidator{
    static cannotContainSpace(control : AbstractControl): ValidationErrors | null
    {
        if((control.value as string).indexOf(' ') >= 0)
        {
            return {cannotContainSpace : true};
        }

        return null;
    }

    static shouldbeUnique(control: AbstractControl): Promise<ValidationErrors | null>
    {
        return new Promise((resolve , reject)=>{
            setTimeout(()=>{
                if(control.value == 'Adib'){
                    resolve({shouldbeUnique:true})
                }
                else resolve(null);
            },2000)
        });
    }
    static invalidOldPass(control: AbstractControl): Promise<ValidationErrors | null>
    {
        return new Promise((resolve,reject)=>{
            if(control.value !== '123')
            {
                resolve({invalidOldPass: true})    
            }
                
            else{
                resolve(null);
            }  
        });
    }
}