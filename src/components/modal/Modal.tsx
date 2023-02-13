import { useEffect } from 'react';
import ReactDOM from 'react-dom';

type PropsT = {
  children: React.ReactNode;
  actionBar?: React.ReactNode;
  onClose: () => void;
};

const Modal: React.FC<PropsT> = ({ onClose, children, actionBar }) => {
  useEffect(() => {
    document.body.classList.add('overflow-hidden');

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, []);

  return ReactDOM.createPortal(
    <div className="fixed inset-0">
      <div
        onClick={onClose}
        className="absolute inset-0 bg-gray-300 opacity-80"
      ></div>
      <div className="modal-content absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 h-1/2 min-h-fit w-1/2  p-10 bg-white">
        <div className="flex flex-col justify-between h-full ">
          <div className="overflow-y-auto">{children}</div>

          <div className="flex justify-end">{actionBar}</div>
        </div>
      </div>
    </div>,
    document.getElementById('modal-root') as HTMLElement
  );
};

export default Modal;

//The background div of the modal needs to cover the entire screen
//also the modal needs to cover up all existing content
//naive solution:
//.modal-bg {position: absolute; inset-0( top: 0px; right: 0px; bottom: 0px;left: 0px;)}
//butt it will work if all of the parents of the modal have position other than static (default)
//which is impossible in real application

//So wee need to use react portals
//With portals we can position modals div-bg relative to the html doc
//so it will never have positioned parents
//-add div with id='modal-root' to index.html

//add fixed to main modal div, so modal bg and content will be fixed and user will be abele to scroll the page

//BUT if there is a need to show modal without scrolling current page
//use useEffect hook to add overflow-hidden tilewindcss (overflow: hidden) class to body element
//and remove it when modal is unmounted
