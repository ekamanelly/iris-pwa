import Image from "next/image";
import irisImage from "../../assets/image/iris.png";

export function Accordion(props: any) {
  return (
    <div className="flex justify-center pt-[42px] mb-[81px]">
      <div className="w-[1339px]  relative">
        <div className=" h-60 absolute inset-0 flex justify-center">
          <div className=" transform translate-y-[169px] z-10 w-[149px] h-[149px]">
            <Image layout="responsive" src={irisImage} />
          </div>
        </div>
        <div className="flex w-full overflow-x-auto container-snap">
          <div className="flex   ">
            <div className="w-[264px] h-[264px]  ">
              <Image
                layout="responsive"
                width={200}
                height={200}
                src="https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"
              />
            </div>
            <div className="w-[264px] h-[264px]">
              <Image
                layout="responsive"
                width={200}
                height={200}
                src="https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"
              />
            </div>
            <div className="w-[264px] h-[264px]">
              <Image
                layout="responsive"
                width={200}
                height={200}
                src="https://images.unsplash.com/photo-1622890806166-111d7f6c7c97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"
              />
            </div>
            <div className="w-[264px] h-[264px]">
              <Image
                layout="responsive"
                width={200}
                height={200}
                src="https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"
              />
            </div>
            <div className="w-[264px] h-[264px]">
              <Image
                layout="responsive"
                width={200}
                height={200}
                src="https://images.unsplash.com/photo-1575424909138-46b05e5919ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"
              />
            </div>
            <div className="w-[264px] h-[264px]">
              <Image
                layout="responsive"
                width={200}
                height={200}
                src="https://images.unsplash.com/photo-1559333086-b0a56225a93c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"
              />
            </div>
            <div className="w-[264px] h-[264px]">
              <Image
                layout="responsive"
                width={200}
                height={200}
                src="https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"
              />
            </div>
            <div className="w-[264px] h-[264px]">
              <Image
                layout="responsive"
                width={200}
                height={200}
                src="https://images.unsplash.com/photo-1622890806166-111d7f6c7c97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"
              />
            </div>
            <div className="w-[264px] h-[264px]">
              <Image
                layout="responsive"
                width={200}
                height={200}
                src="https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"
              />
            </div>
            <div className="w-[264px] h-[264px]">
              <Image
                layout="responsive"
                width={200}
                height={200}
                src="https://images.unsplash.com/photo-1575424909138-46b05e5919ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"
              />
            </div>
            <div className="w-[264px] h-[264px]">
              <Image
                layout="responsive"
                width={200}
                height={200}
                src="https://images.unsplash.com/photo-1559333086-b0a56225a93c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
