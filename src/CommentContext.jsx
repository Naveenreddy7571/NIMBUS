import React, { createContext, useState } from 'react';

const CommentContext = createContext();

export const CommentProvider = ({ children }) => {
  const [isCommentPopupVisible, setisCommentPopupVisible] = useState(false);

  return (
    <CommentContext.Provider value={{ isCommentPopupVisible, setisCommentPopupVisible }}>
      {children}
    </CommentContext.Provider>
  );
};

export default CommentContext;
