# coding: utf-8
lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require 'flux_on_rails/version'

Gem::Specification.new do |spec|
  spec.name          = "flux_on_rails"
  spec.version       = FluxOnRails::VERSION
  spec.authors       = ["Ed Shadi"]
  spec.email         = ["edshadi@gmail.com"]
  spec.summary       = %q{Flux and React generators and setup for Rails}
  spec.description   = %q{Flux and React generators for Rails}
  spec.homepage      = ""
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0")
  spec.executables   = spec.files.grep(%r{^bin/}) { |f| File.basename(f) }
  spec.test_files    = spec.files.grep(%r{^(test|spec|features)/})
  spec.require_paths = ["lib"]

  spec.add_development_dependency "bundler", "~> 1.7"
  spec.add_development_dependency "rake", "~> 10.0"
end
