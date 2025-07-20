{
  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";
    systems.url = "github:nix-systems/default";
    flake-parts = {
      url = "github:hercules-ci/flake-parts";
      inputs.nixpkgs-lib.follows = "nixpkgs";
    };
  };

  outputs =
    inputs@{ flake-parts, ... }:
    flake-parts.lib.mkFlake { inherit inputs; } {
      systems = import inputs.systems;
      perSystem =
        { pkgs, self', ... }:
        let
          unocss-language-server = pkgs.callPackage ./unocss-language-server.nix { };
        in
        {
          devShells.default = pkgs.mkShell {
            packages = with pkgs; [
              nodejs_latest
              pnpm
              nushell
              # lsps
              nil
              nixd
              vscode-langservers-extracted
              vtsls
              svelte-language-server
              emmet-language-server
              unocss-language-server
              stylelint-lsp
              # formatters
              nixfmt-rfc-style
              dprint
              # linters
              statix
              deadnix
              eslint
            ];
          };

          formatter = pkgs.writeShellApplication {
            name = "linter";
            runtimeInputs = self'.devShells.default.nativeBuildInputs;
            text = ''
              find . -iname '*.nix' -exec nixfmt {} \; -exec deadnix -e {} \; -exec statix fix {} \;
              pnpm lint
            '';
          };
        };
    };
}
