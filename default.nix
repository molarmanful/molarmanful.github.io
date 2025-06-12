{
  stdenv,
  nodejs_latest,
  pnpm,
  ...
}:

stdenv.mkDerivation (finalAttrs: {
  pname = "molarmanful.github.io";
  version = "0.0.0";

  src = ./.;

  nativeBuildInputs = [
    nodejs_latest
    pnpm.configHook
  ];

  pnpmDeps = pnpm.fetchDeps {
    inherit (finalAttrs) pname version src;
    hash = "sha256-jJwHz3dJ2Uv0D9SNkrsetoQr/XHuaj0N8xqCM97xYLg=";
  };

  buildPhase = ''
    runHook preBuild

    pnpm check
    pnpm build
    touch build/.nojekyll

    runHook postBuild
  '';

  installPhase = ''
    runHook preInstall

    install -d $out
    cp -r build/. $out

    runHook postInstall
  '';
})
