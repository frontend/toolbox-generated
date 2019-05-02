import $ from 'jquery';

import '../icons/svg-icons';
import button from './atoms/button/button';

const init = () => {
  button();
};

// Will init the scripts outside of Toolbox
if (undefined === window.sources) {
  (($) => { $(document).ready(() => init()); })(jQuery);
}

// Will init the scripts inside of Toolbox
document.addEventListener('ToolboxReady', () => init());
