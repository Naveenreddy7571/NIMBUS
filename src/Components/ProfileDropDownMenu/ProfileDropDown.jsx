import React from "react";

import './ProfileDropDown.css'
function ProfileDropDown({isProfileDropDownActivated}) {
  return (
    <div class="profile-drop-down-menu" id="profile_menu">
      <div class="profile-menu">
        <div class="user-info">
          <img src="./Assets/profile-pic.jpeg" />
          <h3>Naveen Reddy</h3>
        </div>
        <hr />

        <div class="profile-items">
          <a href="#" class="sub-menu-link">
            <span class="material-icons">account_circle</span>
            <h3>Edit Profile</h3>
          </a>

          <a href="#" class="sub-menu-link">
            <span class="material-icons">settings</span>
            <h3>Settings</h3>
          </a>

          <a href="#" class="sub-menu-link">
            <span class="material-icons">contact_support</span>
            <h3>Help and Support</h3>
          </a>

          <a href="#" class="sub-menu-link">
            <span class="material-icons">logout</span>
            <h3>Logout</h3>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProfileDropDown;
