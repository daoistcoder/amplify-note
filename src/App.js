import { SocialPostCollection, NavBarHeader2, NoteCreateForm, NoteUpdateForm } from './ui-components';
// import { Icon } from "@aws-amplify/ui-react"; - to be used in future
// import { HiMiniXMark } from "react-icons/hi2"; - to be used in future
import { useState } from 'react';

import { withAuthenticator } from '@aws-amplify/ui-react'

function App({ signOut }) {
  // using useState hook show modals
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [updateNote, setUpdateNote] = useState();

  return (
    <div style={{ backgroundColor: '#F5F5F5' }}>
      <NavBarHeader2
        width={'100%'}
        marginBottom={'20px'}
        overrides={{
          Button39493466: {
            onClick: () => {
              setShowCreateModal(true);
              console.log('setShowCreateModal triggered');
            }
          },
          Button39493467: {
            onClick: () => {
              signOut();
              console.log('signOut triggered');
            }
          }
        }} />
      <div className='container'>
        <SocialPostCollection
          overrideItems={({ item, idx }) => {
            return {
              overrides: {
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

export default withAuthenticator(App);

