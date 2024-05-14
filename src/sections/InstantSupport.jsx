import React from 'react';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import ForumIcon from '@mui/icons-material/Forum';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import BuildIcon from '@mui/icons-material/Build';

const InstantSupport = () => {
  return (
    <div className=" my-10 grid grid-cols-2 md:grid-cols-4 gap-2 px-4 md:px-16 py-8 bg-[#38bdf8]">
      <div className="bg-white rounded-lg px-2 py-3 border md:py-2 flex flex-col items-center text-[#0ea5e9]">
        <SettingsSuggestIcon sx={{ fontSize: 80 }} />

        <span className="text-xl text-center font-bold mt-2">
          Setup & Install
        </span>
      </div>
      <div className="bg-white rounded-lg px-2 py-3 border md:py-2 flex flex-col items-center  text-[#0ea5e9]">
        <BuildIcon sx={{ fontSize: 80 }} />
        <span className="text-xl text-center font-bold mt-2">
          Diagnose & Fix
        </span>
      </div>
      <div className="bg-white rounded-lg px-2 py-3 border md:py-2 flex flex-col items-center  text-[#0ea5e9]">
        {/* ----------- */}
        <HeadsetMicIcon sx={{ fontSize: 80 }} />
        <span className="text-xl text-center font-bold mt-2">Contact</span>
      </div>
      <div className="bg-white rounded-lg px-2 py-3 border md:py-2 flex flex-col items-center  text-[#0ea5e9]">
        {/* ---- */}
        <ForumIcon sx={{ fontSize: 80 }} />
        <span className="text-xl text-center font-bold mt-2">Chat</span>
      </div>
    </div>
  );
};

export default InstantSupport;
