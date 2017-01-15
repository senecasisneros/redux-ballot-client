// A JS implementation of the DOM and HTML standards, for use with node.js.
import jsdom from 'jsdom';
import chai from 'chai';
import chaiImmutable from 'chai-immutable';

// create jsdom versions of the document and window objects that would normally be provided by the web browser
const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
const win = doc.defaultView;

// Put them on the global object, so that they will be discovered by React when it accesses document or window.
global.document = doc;
global.window = win;


// Take all the properties that the jsdom window object contains, such as navigator,
// and hoist them on to the Node.js global object.
// This is done so that properties provided by window can be used without the window. prefix, which is what would happen in a browser environment.
Object.keys(window).forEach((key) => {
  if (!(key in global)) {
    global[key] = window[key];
  }
});

chai.use(chaiImmutable);
