{
  stdenvNoCC,
  fetchFromGitHub,
  makeWrapper,
  nodejs_latest,
  pnpm_9,
}:

stdenvNoCC.mkDerivation (finalAttrs: {
  pname = "unocss-language-server";
  version = "0.1.5";

  src = fetchFromGitHub {
    owner = "xna00";
    repo = finalAttrs.pname;
    tag = "v${finalAttrs.version}";
    hash = "sha256-WRCvpBpLLjpLucpTk2N+6RILsx7a6F143D4XBDU0wKk=";
  };

  nativeBuildInputs = [
    pnpm_9.configHook
    nodejs_latest
    makeWrapper
  ];

  pnpmDeps = pnpm_9.fetchDeps {
    inherit (finalAttrs) pname version src;
    hash = "sha256-w46qG+7B7sYSzJXHNslrUxzTAg0mNEXVEZP1vSEEohA=";
  };

  buildPhase = ''
    runHook preBuild

    pnpm build

    runHook postBuild
  '';

  installPhase = ''
    runHook preInstall

    mkdir -p $out/{bin,lib/${finalAttrs.pname}}
    cp -r . $out/lib/${finalAttrs.pname}
    chmod +x $out/lib/${finalAttrs.pname}/bin/index.js
    ln -s $out/lib/${finalAttrs.pname}/bin/index.js $out/bin/${finalAttrs.pname}

    runHook postInstall
  '';
})
