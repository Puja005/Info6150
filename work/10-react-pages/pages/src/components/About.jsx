import '../css/about.css'

const paragraphs = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at lacinia augue. Nam euismod metus augue, sit amet semper augue tristique ac. Sed aliquam augue sapien, sed hendrerit nulla dapibus a. Donec quis nunc sit amet metus ultrices fringilla. Vivamus gravida convallis nisi at bibendum. Sed eget lorem commodo, ornare leo a, volutpat sapien. Sed euismod commodo lectus, ut laoreet lectus venenatis non. Duis ac magna et massa euismod lacinia. Duis nec erat nec est finibus pharetra ac at leo. Integer pulvinar sagittis dolor eu commodo. Donec euismod, augue quis bibendum pretium, velit velit congue mi, in scelerisque felis neque non nulla. Suspendisse semper ultricies elit, vel malesuada quam mattis sed. Sed at dui vel sapien malesuada facilisis. Sed tempor leo euismod lectus auctor, vel mollis sapien imperdiet. Quisque blandit, nisi id consectetur rhoncus, nunc felis ultricies orci, id commodo metus sapien vitae purus.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at lacinia augue. Nam euismod metus augue, sit amet semper augue tristique ac. Sed aliquam augue sapien, sed hendrerit nulla dapibus a. Donec quis nunc sit amet metus ultrices fringilla. Vivamus gravida convallis nisi at bibendum. Sed eget lorem commodo, ornare leo a, volutpat sapien. Sed euismod commodo lectus, ut laoreet lectus venenatis non. Duis ac magna et massa euismod lacinia. Duis nec erat nec est finibus pharetra ac at leo. Integer pulvinar sagittis dolor eu commodo. Donec euismod, augue quis bibendum pretium, velit velit congue mi, in scelerisque felis neque non nulla. Suspendisse semper ultricies elit, vel malesuada quam mattis sed. Sed at dui vel sapien malesuada facilisis. Sed tempor leo euismod lectus auctor, vel mollis sapien imperdiet. Quisque blandit, nisi id consectetur rhoncus, nunc felis ultricies orci, id commodo metus sapien vitae purus.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at lacinia augue. Nam euismod metus augue, sit amet semper augue tristique ac. Sed aliquam augue sapien, sed hendrerit nulla dapibus a. Donec quis nunc sit amet metus ultrices fringilla. Vivamus gravida convallis nisi at bibendum. Sed eget lorem commodo, ornare leo a, volutpat sapien. Sed euismod commodo lectus, ut laoreet lectus venenatis non. Duis ac magna et massa euismod lacinia. Duis nec erat nec est finibus pharetra ac at leo. Integer pulvinar sagittis dolor eu commodo. Donec euismod, augue quis bibendum pretium, velit velit congue mi, in scelerisque felis neque non nulla. Suspendisse semper ultricies elit, vel malesuada quam mattis sed. Sed at dui vel sapien malesuada facilisis. Sed tempor leo euismod lectus auctor, vel mollis sapien imperdiet. Quisque blandit, nisi id consectetur rhoncus, nunc felis ultricies orci, id commodo metus sapien vitae purus."]


function About() {
  return (
    <main>
      {paragraphs.map(paragraph => {
        return (<p className="about_paragraph" key={paragraph.substring(0, 10)}>{paragraph}</p>)
      })}
    </main>
  );
}

export default About;