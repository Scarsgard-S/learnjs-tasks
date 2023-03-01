"use strict";

alert ( alert(1) || 2 || alert(3) );
// 1 (сработает внутренний alert)
// 2 (истинно)