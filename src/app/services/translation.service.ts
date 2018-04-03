import {
  Inject,
  Injectable,
  LOCALE_ID,
  TRANSLATIONS,
  TRANSLATIONS_FORMAT
} from "@angular/core";

@Injectable()
export class TranslationService {

  constructor(
    @Inject(TRANSLATIONS_FORMAT) format: string,
    @Inject(TRANSLATIONS) translations: string,
    @Inject(LOCALE_ID) locale: string
  ) { 
    
  }

}
