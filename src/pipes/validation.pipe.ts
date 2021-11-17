// import {
//     PipeTransform,
//     Injectable,
//     ArgumentMetadata,
//     HttpException,
//     HttpStatus, Logger, Inject,
//   } from '@nestjs/common';
//   import { validate } from 'class-validator';
//   import { plainToClass } from 'class-transformer';
//   import { I18nService } from 'nestjs-i18n';
//   import { Common } from '../../common/functions';
  
//   @Injectable()
//   export class ValidationPipe implements PipeTransform<any> {
//     @Inject()
//     private readonly i18n: I18nService;
  
//     async transform(value: any, metadata: ArgumentMetadata) {
//       const { metatype } = metadata;
//       if (!metatype || !this.toValidate(metatype)) {
//         return value;
//       }
//       const object = plainToClass(metatype, value);
//       const errorsList = await validate(object);
//       if (errorsList.length > 0) {
//         const errors = [];
//         for (const error of errorsList) {
//           console.error('error:', error);
//           const errorsObject = error.constraints;
//           console.error('errorsObject:', errorsObject);
//           const { property, target } = error;
//           console.error('property:', property);
//           console.error('target:', target.constructor.name);
//           let object_name = Common.translateObjectMapping(target.constructor.name) + '.' + property;
//           object_name = await this.i18n.translate('fields.' + object_name, {});
//           const { isNotEmpty, isString, isEmail, length, isIn, arrayMinSize, isEnum, isArray, validateNested, isObject, max, maxLength, isMongoId, isBoolean } = errorsObject;
//           if (isNotEmpty) {
//             errors.push(await this.i18n.translate('validations.required' , { args: { attribute: object_name} }));
//           }
  
//           if (isString) {
//             errors.push(await this.i18n.translate('validations.string' , { args: { attribute: object_name} }));
//           }
  
//           if (isEmail) {
//             errors.push(await this.i18n.translate('validations.not_regex' , { args: { attribute: object_name} }));
//           }
  
//           if (length) {
//             const parameter1 = length.split(' ')[0];
//             const parameter2 = length.split(' ')[1];
//             errors.push(await this.i18n.translate('validations.between.string' , { args: { attribute: object_name, min: parameter1, max: parameter2} }));
//           }
  
//           if (isIn) {
//             const parameter1 = isIn.split(' ')[0];
//             errors.push(await this.i18n.translate('validations.enum' , { args: { attribute: object_name, values: parameter1} }));
//           }
  
//           if (isArray) {
//             errors.push(await this.i18n.translate('validations.not_regex' , { args: { attribute: object_name} }));
//           }
  
//           if (isObject) {
//             errors.push(await this.i18n.translate('validations.not_regex' , { args: { attribute: object_name} }));
//           }
  
//           if (validateNested) {
//             errors.push(await this.i18n.translate('validations.not_regex' , { args: { attribute: object_name} }));
//           }
  
//           if (max) {
//             const parameter1 = max.split(' ')[0];
//             errors.push(await this.i18n.translate('validations.max.numeric' , { args: { attribute: object_name, max: parameter1} }));
//           }
  
//           if (maxLength) {
//             const parameter1 = maxLength.split(' ')[0];
//             errors.push(await this.i18n.translate('validations.max.string' , { args: { attribute: object_name, max: parameter1} }));
//           }
  
//           if (isEnum) {
//             const parameter1 = isEnum.split(' ')[0];
//             errors.push(await this.i18n.translate('validations.enum' , { args: { attribute: object_name, values: parameter1} }));
//           }
  
//           if (arrayMinSize) {
//             const parameter1 = arrayMinSize.split(' ')[0];
//             errors.push(await this.i18n.translate('validations.min.array' , { args: { attribute: object_name, min: parameter1} }));
//           }
  
//           if (isMongoId) {
//             errors.push(await this.i18n.translate('validations.not_regex' , { args: { attribute: object_name} }));
//           }
  
//           if (isBoolean) {
//             errors.push(await this.i18n.translate('validations.not_regex' , { args: { attribute: object_name} }));
//           }
  
//         }
//         if ( JSON.parse(process.env.IS_DEBUG)) {
//           const logger = new Logger('Validation');
//           logger.error(errors);
//         }
//         if (errors.length > 0) {
//           throw new HttpException({ statusCode: HttpStatus.BAD_REQUEST, message: errors }, HttpStatus.BAD_REQUEST);
//         }
//       }
//       return value;
//     }
  
//     private toValidate(metatype): boolean {
//       const types = [String, Boolean, Number, Array, Object];
//       return !types.find(type => metatype === type);
//     }
  
//     private isEmpty(value: any) {
//       if (Object.keys(value).length > 0) {
//         return false;
//       }
//       return true;
//     }
//   }
  