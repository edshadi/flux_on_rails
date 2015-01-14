namespace :react do
  desc 'watch and jsx transform react components'
  task :build => :clean do
    exec 'jsx app/assets/components app/assets/javascripts/react -x jsx'
  end
  desc 'watch and jsx transform react components'
  task :watch do
    exec 'jsx --watch app/assets/components app/assets/javascripts/react -x jsx'
  end
  desc 'remove trailing white spaces from transformed react components'
  task :clean do
    exec "sed -i '' -e's/[ \t]*$//' app/assets/javascripts/react/*.js"
  end
end
