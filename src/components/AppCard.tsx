const AppCard = () => {
  return (
    <div
      class={`w-[300px] h-[250px] shadow-lg flex items-center p-[20px] rounded-[30px]`}
    >
      <div class="block space-y-2.5">
        <div class={`flex items-center w-full space-x-[10px]`}>
          <img
            loading={`lazy`}
            src={`https://docs.gnosischain.com/img/tokens/xdai.png`}
            class={`w-[28px] h-[28px]`}
            alt={`App logo`}
          />
          <p class={`text-[20px] text-orange-500 bowlby-one-regular`}>
            XCharge
          </p>
        </div>
        <p class={`text-neutral-700`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
    </div>
  );
};

export default AppCard;
