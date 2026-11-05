"use client";
import ProfileForm from "../profile/ProfileForm";
import ContextProfileForm from "../context/ContextProfileForm";
import ZustandProfileForm from "../zustand/ZustandProfileForm";

export default function ProfileFormsPage() {
  return (
    <div id="wd-profile-forms">
      <h1>Profile Forms</h1>
      <ProfileForm />
      <ContextProfileForm />
      <hr />
      <ZustandProfileForm />
    </div>
  );
}
