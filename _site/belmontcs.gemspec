# coding: utf-8

Gem::Specification.new do |spec|
  spec.name          = "belmontcs"
  spec.version       = "0.1.0"
  spec.authors       = ["Spencer Tiberi"]
  spec.email         = ["spencertiberi@gmail.com"]

  spec.summary       = %q{Theme for Belmont Hill School CS courses}
  spec.homepage      = "https://github.com/spencertiberi/belmontcs"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r{^(assets|_layouts|_includes|_sass|LICENSE|README)}i) }

  spec.add_runtime_dependency "jekyll", "~> 3.5"

  spec.add_development_dependency "bundler", "~> 1.12"
  spec.add_development_dependency "rake", "~> 10.0"
end
