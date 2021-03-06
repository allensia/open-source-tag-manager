/**
 * Copyright (C) 2015 Digimedia Sp. z.o.o. d/b/a Clearcode
 *
 * This program is free software: you can redistribute it and/or modify it under
 * the terms of the GNU Affero General Public License as published by the Free
 * Software Foundation, either version 3 of the License, or (at your option) any
 * later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

import TranslationFactory from './factory/TranslationFactory.js';
import Translation from './services/Translation.js';

const MODULE_NAME = 'clearcode.tm.translation';

TranslationFactory.$inject = [
    '$http',
    '$q'
];

Translation.$inject = [
    `${MODULE_NAME}.translationFactory`
];

angular
    .module(MODULE_NAME, [])
    .factory(`${MODULE_NAME}.translationFactory`, TranslationFactory)
    .service(`${MODULE_NAME}.translation`, Translation);

module.exports = {MODULE_NAME};
