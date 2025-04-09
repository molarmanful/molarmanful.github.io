{
  description = "Description for the project";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
    flake-parts.url = "github:hercules-ci/flake-parts";
    systems.url = "systems";
    devshell.url = "github:numtide/devshell";
  };

  outputs =
    inputs@{ flake-parts, ... }:
    flake-parts.lib.mkFlake { inherit inputs; } {
      imports = [ inputs.devshell.flakeModule ];
      systems = import inputs.systems;
      perSystem =
        {
          pkgs,
          ...
        }:
        let
          unocss-language-server = pkgs.callPackage ./unocss-language-server.nix { };
        in
        {
          packages.default = pkgs.callPackage ./default.nix { };

          devshells.default = {

            commands = with pkgs; [
              {
                package = nil;
                category = "lsp";
              }
              {
                package = nixd;
                category = "lsp";
              }
              {
                package = nixfmt-rfc-style;
                category = "formatter";
              }
              {
                package = statix;
                category = "linter";
              }
              {
                package = deadnix;
                category = "linter";
              }
              { package = nodejs_latest; }
              { package = pnpm; }
              {
                package = vscode-langservers-extracted;
                category = "lsp";
              }
              {
                package = vtsls;
                category = "lsp";
              }
              {
                package = svelte-language-server;
                category = "lsp";
              }
              {
                package = emmet-language-server;
                category = "lsp";
              }
              {
                package = unocss-language-server;
                category = "lsp";
              }
              {
                package = stylelint-lsp;
                category = "lsp";
              }
              {
                package = eslint;
                category = "linter";
              }
              { package = nushell; }
            ];
          };
        };
    };
}
