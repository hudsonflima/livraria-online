// globalize-config.js
import Globalize from 'globalize';
import ptCldrData from 'devextreme-cldr-data/pt.json';
import supplementalCldrData from 'devextreme-cldr-data/supplemental.json';

// Carregar dados CLDR
Globalize.load(ptCldrData);
Globalize.load(supplementalCldrData);

// Carregar mensagens específicas para pt-br, se necessário
import ptMessages from 'devextreme/localization/messages/pt.json';
Globalize.loadMessages(ptMessages);

// Configurar o locale
Globalize.locale('pt-BR');
