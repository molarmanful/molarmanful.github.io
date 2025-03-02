{
  description = "Description for the project";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-parts.url = "github:hercules-ci/flake-parts";
    systems.url = "systems";
    devshell.url = "github:numtide/devshell";
  };

  outputs =
    inputs@{ flake-parts, ... }:
    flake-parts.lib.mkFlake { inherit inputs; } {
      imports = [
      ];
      systems = import inputs.systems;
      perSystem =
        {
          pkgs,
          ...
        }:
        {
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
              { package = pnpm; }
            ];

            packages = with pkgs; [ ];
          };
        };
    };
}
