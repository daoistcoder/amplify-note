import { SocialPostCollection, NavBarHeader, NoteCreateForm, NoteUpdateForm } from './ui-components';
// import { Icon } from "@aws-amplify/ui-react"; - to be used in future
// import { HiMiniXMark } from "react-icons/hi2"; - to be used in future
import { useState } from 'react';

function App() {
  // using useState hook show modals
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [updateNote, setUpdateNote] = useState();

  return (
    <div style={{ backgroundColor: '#F5F5F5' }}>
      <NavBarHeader width={'100%'} marginBottom={'20px'} />
      <div className='container'>
        <SocialPostCollection 
          overrides={{
              AddPostBtn: {
                onClick: () => {
                  setShowCreateModal(true);
                  console.log('setShowCreateModal triggered');
                }
              }
            }}
          overrideItems={({item, idx}) => {
            return {
              overrides:{
                SocialPostEditBtn: {
                  onClick: () => {
                    setShowUpdateModal(true);
                    console.log('setShowUpdateModal triggered')
                    setUpdateNote(item)
                  }
                }
              }
            }
          }}
        
        />
      </div>
      {/* When I click a button inside this component showCreateModal to true */}
      <div className='modal' style={{ display: showCreateModal === false && 'none' }}>
        <NoteCreateForm overrides={{
          NoteCreateFormCloseBtn: { 
            onClick: () => {
              setShowCreateModal(false);
              console.log('setShowCreateModal to False triggered');
            }
          }
        }} />
      </div>
      <div className='modal' style={{ display: showUpdateModal === false && 'none' }}>
        <NoteUpdateForm 
          note={updateNote} 
          overrides={{
            NoteUpdateFormCloseBtn: { 
              onClick: () => {
                setShowUpdateModal(false);
                console.log('setShowUpdateModal to False triggered');
              }
            }
          }} />
      </div>
    </div>
  );
}

// export const CloseIcon = () => (
//   <Icon
//     ariaLabel="CloseIcon"
//     height={'1.5rem'}
//     as={HiMiniXMark}
//   />
// ); - to be used in future

export default App;

