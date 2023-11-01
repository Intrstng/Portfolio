import React from 'react';

type AvatarPropsType = {
  avatarSrc: string
  alternativeSrc: string
}

export const Avatar: React.FC<AvatarPropsType> = (props: AvatarPropsType) => {
  return (
    <object type='image/svg+xml' data={props.avatarSrc} width='48' height='48'>
      <img src={props.alternativeSrc} width='48' height='48' alt='avatar png'/>
    </object>
  );
}