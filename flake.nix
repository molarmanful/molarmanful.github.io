{
  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";
    flake-parts = {
      url = "github:hercules-ci/flake-parts";
      inputs.nixpkgs-lib.follows = "nixpkgs";
    };
    treefmt-nix.url = "github:numtide/treefmt-nix";
  };

  outputs =
    inputs@{ flake-parts, ... }:
    flake-parts.lib.mkFlake { inherit inputs; } {
      systems = inputs.nixpkgs.lib.systems.flakeExposed;
      imports = [ inputs.treefmt-nix.flakeModule ];
      perSystem =
        { pkgs, ... }:
        {

          devShells.default = pkgs.mkShell {
            packages = with pkgs; [
              nodejs_latest
              corepack
              nushell
              # lsps
              nil
              nixd
              vscode-langservers-extracted
              vtsls
              svelte-language-server
              emmet-language-server
              tailwindcss-language-server
              # formatters
              dprint
              yamlfmt
              # linters
              statix
              deadnix
              eslint
              actionlint
            ];
          };

          treefmt = {
            projectRootFile = "flake.nix";
            programs = {
              nixfmt.enable = true;
              statix.enable = true;
              deadnix.enable = true;
              yamlfmt = {
                enable = true;
                excludes = [ "*-lock.yaml" ];
              };
              actionlint.enable = true;
              dprint = {
                enable = true;
                includes = [ "web" ];
              };
            };
          };
        };
    };
}
