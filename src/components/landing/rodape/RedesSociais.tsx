import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandYoutube,
} from "@tabler/icons-react";
import RedeSocial from "./RedeSocial";

export default function RedesSociais() {
  return (
    <div className="flex">
      <RedeSocial
        icone={<IconBrandYoutube />}
        url="https://www.youtube.com/@alessandrocs75"
      />
      <RedeSocial
        icone={<IconBrandInstagram />}
        url="https://www.instagram.com/alecarvalhos"
      />
      <RedeSocial
        icone={<IconBrandFacebook />}
        url="https://www.facebook.com/alecarvalhos/"
      />
      <RedeSocial
        icone={<IconBrandGithub />}
        url="https://github.com/alesouzadf"
      />
    </div>
  );
}
